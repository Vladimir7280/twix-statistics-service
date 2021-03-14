import { nodeRewards } from '@src/config';
import { NodeInfoDTO, TestResultDTO, TestResultInfoDTO, RewardProgramDTO, PayoutPageDTO } from '@src/models/NodeRewards/gen-src';
import { HTTP } from '@src/services/Http';

export interface RewardProgram {
	name: RewardProgramDTO;
	passed: boolean;
}

export interface NodeRewardsInfo {
	round: number;
	nodeInfo: {
		friendlyName: string;
		host: string;
	};
	history: TestResultDTO[];
	testResultInfo: TestResultInfoDTO;
}

export interface PayoutFilter {
	nodeId: string;
	pageSize: string;
	pageNumber: string;
	order: string;
}

export class NodeRewards {
	static async getNodeRewardPrograms(mainPublicKey: string): Promise<RewardProgram[]> {
		const rewardPrograms: Array<RewardProgram> = [];

		try {
			const nodeInfo = await NodeRewards.getNodeInfo(mainPublicKey);

			rewardPrograms.push({
				name: nodeInfo.rewardProgram,
				passed: nodeInfo.status === 'OK',
			});
		} catch (e) {}

		return rewardPrograms;
	}

	static async getNodeInfo(mainPublicKey: string): Promise<NodeInfoDTO> {
		const nodeInfo: NodeInfoDTO = (await HTTP.get(`${nodeRewards.CONTROLLER_ENDPOINT}/nodes/mainPublicKey/${mainPublicKey}`)).data;

		return nodeInfo;
	}

	static async getTestResults(nodeId: string): Promise<TestResultDTO[]> {
		const testResults: TestResultDTO[] = (await HTTP.get(`${nodeRewards.CONTROLLER_ENDPOINT}/testResults/nodeId/${nodeId}`)).data;

		return testResults;
	}

	static async getTestResultInfo(nodeId: string, round: number): Promise<TestResultInfoDTO> {
		const testResultInfo: TestResultInfoDTO = (
			await HTTP.get(`${nodeRewards.CONTROLLER_ENDPOINT}/testResultInfo/nodeId/${nodeId}/round/${round}`)
		).data;

		return testResultInfo;
	}

	static async getPayouts(filter: PayoutFilter): Promise<PayoutPageDTO> {
		const payoutPageDTO = (await HTTP.get(`${nodeRewards.CONTROLLER_ENDPOINT}/payouts`, { params: filter })).data;

		return payoutPageDTO;
	}

	static async getVotingPayouts(filter: PayoutFilter): Promise<PayoutPageDTO> {
		const payoutPageDTO = (await HTTP.get(`${nodeRewards.CONTROLLER_ENDPOINT}/votingPayouts`, { params: filter })).data;

		return payoutPageDTO;
	}
}
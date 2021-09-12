import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import { RewardProgram } from '@src/services/NodeRewards';
import { ApiStatus } from '@src/services/ApiNodeService';
import { PeerStatus } from '@src/models/PeerStatus';
import { IHostDetail } from './HostDetail';

export interface INode {
	friendlyName: string;
	host: string;
	networkGenerationHashSeed: string;
	networkIdentifier: number;
	port: number;
	publicKey: string;
	roles: number;
	version: number;
	rewardPrograms: RewardProgram[];
	peerStatus?: PeerStatus;
	apiStatus?: ApiStatus;
	hostDetail?: IHostDetail;
}

export interface NodeDocument extends INode, Document {}

const NodeSchema: Schema = new Schema({
	friendlyName: {
		type: String,
		required: false,
	},
	host: {
		type: String,
		required: true,
	},
	networkGenerationHashSeed: {
		type: String,
		required: true,
	},
	networkIdentifier: {
		type: Number,
		required: true,
	},
	port: {
		type: Number,
		required: true,
	},
	peerStatus: {
		isAvailable: {
			type: Boolean,
			required: false,
		},
		lastStatusCheck: {
			type: Number,
			required: false,
		},
	},
	apiStatus: {
		isHttpsEnabled: {
			type: Boolean,
			required: false,
		},
		isAvailable: {
			type: Boolean,
			required: false,
		},
		chainHeight: {
			type: Number,
			required: false,
		},
		finalizedBlock: {
			height: {
				type: Number,
				required: false,
			},
			epoch: {
				type: Number,
				required: false,
			},
			point: {
				type: Number,
				required: false,
			},
			hash: {
				type: String,
				required: false,
			},
		},
		nodePublicKey: {
			type: String,
			required: false,
		},
		restVersion: {
			type: String,
			required: false,
		},
		votingKeys: {
			type: [
				{
					publicKey: {
						type: String,
						required: true,
					},
					startEpoch: {
						type: Number,
						required: false,
					},
					endEpoch: {
						type: Number,
						required: false,
					},
				},
			],
			required: false,
		},
		delegatedAccounts: {
			type: Array,
		},
		lastStatusCheck: {
			type: Number,
			required: false,
		},
		required: false,
	},
	publicKey: {
		type: String,
		required: true,
		unique: true,
	},
	roles: {
		type: Number,
		required: true,
	},
	version: {
		type: Number,
		required: true,
	},
	rewardPrograms: {
		type: [
			{
				name: {
					type: String,
					required: true,
				},
				passed: {
					type: Boolean,
					required: true,
				},
			},
		],
		required: true,
	},
	hostDetail: {
		type: {
			host: {
				type: String,
				required: true,
			},
			coordinates: {
				type: {
					latitude: {
						type: Number,
						required: true,
					},
					longitude: {
						type: Number,
						required: true,
					},
				},
				required: false,
			},
			location: {
				type: String,
				required: true,
			},
			ip: {
				type: String,
				required: true,
			},
			organization: {
				type: String,
				required: true,
			},
			as: {
				type: String,
				required: true,
			},
			continent: {
				type: String,
				required: false,
			},
			country: {
				type: String,
				required: true,
			},
			region: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			district: {
				type: String,
				required: true,
			},
			zip: {
				type: String,
				required: true,
			},
		},
		required: false,
	},
});

NodeSchema.set('toObject', {
	transform: (doc: Document, ret: Document) => {
		delete ret._id;
		delete ret.__v;
	},
});

export const Node = mongoose.model<NodeDocument>('Node', NodeSchema);

export const validateNodeModel = (node: any): boolean => {
	if (!node || typeof node !== 'object') return false;

	return !new Node(node).validateSync();
};

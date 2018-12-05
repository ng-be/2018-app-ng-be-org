export interface Speaker {
	id: string;
	name: string;
	firstName: string;
	description: string;
	picture: string;
	talk: string;
	contact: {
		github?: string;
		twitter?: string;
		website?: {
			title: string;
			url: string;
		};
	};
}

export interface Speaker {
	id: string;
	name: string;
	firstName: string;
	description: string;
	picture: string;
	talk: {
		id: string;
		title: string;
	};
	contact: {
		github?: string;
		twitter?: string;
		website?: {
			title: string;
			url: string;
		};
	};
}

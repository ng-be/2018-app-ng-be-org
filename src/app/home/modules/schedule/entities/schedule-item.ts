export interface ScheduleItem {
	id: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	type: 'break' | 'talk' | 'sponsor';
	speaker: {
		id: number;
		firstName: string;
		name: string;
		picture: string;
	}[];
}

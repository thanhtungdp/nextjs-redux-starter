export const CHANGE_TITLE = 'MOVIE/change-title';

export function changeTitle(title){
	return {
		type: CHANGE_TITLE,
		title
	}
}
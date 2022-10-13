import * as t from '../api/user/types'
import { Api } from '../models'

async function createTopic(request: Api.BODYDATA | undefined): Promise<t.CreateTopicResponse> {
	throw 'Unimplemented'
}

async function deleteTopic(topicId: number): Promise<t.DeleteTopicResponse> {
	throw 'Unimplemented'
}

async function getTopic(): Promise<t.GetTopicResponse> {
	throw 'Unimplemented'
}

async function updateTopic(topicId: number, request: Api.BODYDATA | undefined): Promise<t.UpdateTopicResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	createTopic,
	deleteTopic,
	getTopic,
	updateTopic,
}

export default api

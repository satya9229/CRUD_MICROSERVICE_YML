# User

## Operations

### createTopic

```http
POST /createTopic
```

CreateTopic

### deleteTopic

```http
DELETE /deleteTopic/{topic_id}
```

deleteTopic

### getTopic

```http
GET /getTopic
```

GetTopic

### updateTopic

```http
PUT /UpdateTopic/{topic_id}
```

UpdateTopic

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```

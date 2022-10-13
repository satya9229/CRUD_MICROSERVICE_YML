/* eslint-disable */
// tslint:disable
/**
 * MICRO SERVICES CURD OPERATIONS
 * 
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import passport from 'passport'
import * as t from './types'
import * as v from '../../validation'
import { Api } from '../../models'

export default function(app: Express, impl: t.UserApi) {
	app.post(
		'/createTopic',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiBODYDATAFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.createTopic(__body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.createTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.createTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.createTopic', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.createTopic', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.delete(
		'/deleteTopic/:topic_id',
		function (req, res) {
			try {
				impl.deleteTopic(v.parseNumber('params.topic_id', req.params['topic_id'])).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.deleteTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.deleteTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.deleteTopic', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.deleteTopic', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/getTopic',
		function (req, res) {
			try {
				impl.getTopic().then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.arrayToJson(v.modelApiBODYDATAToJson)('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.getTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.getTopic', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.getTopic', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.put(
		'/UpdateTopic/:topic_id',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiBODYDATAFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.updateTopic(v.parseNumber('params.topic_id', req.params['topic_id']), __body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.updateTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in user.updateTopic', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in user.updateTopic', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in user.updateTopic', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

}
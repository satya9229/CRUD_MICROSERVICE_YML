import { DeleteTopicResponse, GetTopicResponse, UpdateTopicResponse, UserApi, CreateTopicResponse} from "../../../dict/api/user/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'


export class UserApiImpl implements UserApi {
    getTopic(): Promise<GetTopicResponse>  {
        return new Promise<GetTopicResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetTopicResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetTopicResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }

deleteTopic(topic_id:number):Promise<DeleteTopicResponse>{
    return new Promise<DeleteTopicResponse>((resolve,reject)=>{
        collections.users!.deleteOne(
            {topic_id:topic_id},
            function(err: any,result: any){
                if(err){
                    const response=<DeleteTopicResponse>{
                        status:400,
                        body:{message:`someting went wrong`}
                    }
                    resolve(response)
                }
                const response=<DeleteTopicResponse>{
                    status:201,
                    body:{
                        message:`delete User Sucessfully`
                    }
                }
                resolve(response)
            }
        )
        
    })
 }

 updateTopic(topic_id: number, request: Api.BODYDATA | undefined) : Promise<UpdateTopicResponse>
 {
    return new Promise<UpdateTopicResponse>((resolve,reject)=>{
        collections.users!.updateOne(
            {topic_id:topic_id},
            {$set:request},
            function(err:any,result: any){
                if(err){
                    const response=<UpdateTopicResponse>{
                        status: 400,
                        body:{message:`Somting Went Wrong`}
                    }
                    resolve(response)
                }
                const response=<UpdateTopicResponse>{
                    status:201,
                    body:{message:`Update User Sucessfully`}
                }
                resolve(response)
               
            }    
        )

    })
 }


 createTopic(request: Api.BODYDATA | undefined): Promise<CreateTopicResponse>
 {
    return new Promise<UpdateTopicResponse>((resolve,reject)=>{
        collections.users!.findOne(
            {topic_id:request?.topic_id},
            function(err:any,result:any){
                if(result){
                    const response=<UpdateTopicResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {topic_id:request?.topic_id,topic_name:request?.topic_name},
                        function(err:any,result:any){
                          if(err){
                            const response=<UpdateTopicResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UpdateTopicResponse>{
                                status:201,
                                body:{message:`Create User Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }
}

export const createSuccess =(statusCode,succesMessage,data)=>{
    const successObj={
        status:statusCode,
        message:succesMessage,
        data:data
    }

return successObj;

}
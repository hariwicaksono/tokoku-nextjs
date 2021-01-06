import Axios from 'axios'

const RootPath = "http://localhost/tokoku-server/api/"

// Authorization
// key = blog123
// Gunakan https://www.base64decode.org untuk melakukan encode key diatas menjadi format base64
var key = new Buffer.from('dG9rb2t1MTEyMg==', 'base64')
const ApiKey = key.toString();

const GET = (path) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.get(RootPath+path, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
    })
    return promise
}

const GET_ID = (path,id) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.get(RootPath+path+id, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
    })
    return promise
}


const LOGIN = (path,data) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.post(RootPath+path,data, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
    })
    return promise
}

const POST= (path,data) =>{
   const promise = new Promise((resolve,reject)=>{
        Axios.post(RootPath+path,data, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
   })
   return promise
}

 const PUT = (path,data) =>{
    const promise = new Promise((resolve,reject)=>{
         Axios.put(RootPath+path,data, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
             resolve(res.data)
         },err=>{
             reject(err)
         })
    })
    return promise
 }

 const Delete = (path,id) => {
    const promise = new Promise((resolve,reject) => {
        Axios.delete(RootPath+path+id, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res =>{
            resolve(res.data)
        },(err)=>{
            reject(err)
        })
    })
    return promise
}


 const POSTIMAGE = (path,data,name) => {
     const promise = new Promise((resolve,reject)=>{
         const formdata = new FormData()
         formdata.append('foto',data,name)
         Axios.post(RootPath+path,formdata, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data.status)
        },(err)=>{
            reject(err)
        })
     })
     return promise
 }



const GetProduk = () => GET('produk')
const GetPengaturan = () => GET('pengaturan')
const GetUser = () => GET('UserController')
const GetAdmin = () => GET('AdminController')
const GetAllPesan = () => GET('PemesananController')
const GetProdukId = (data) => GET_ID('produk?id=',data)
const PostLogin = (data) => LOGIN('LoginController',data)
const PostUser = (data) => POST('UserController',data)
const PostPesan = (data) => POST('PemesananController',data)
const GetPesan = (data) => GET('PemesananController?id=',data)
const PostProduk = (data) => POST('Produk',data)
const PostAdmin = (data) => POST('AdminController',data)
const PostImageP = (data,name) => POSTIMAGE('ImageUpload',data,name)
const PutProduk = (data) => PUT('Produk',data);
const PutPesan = (data) => PUT('PemesananController',data);
const PutAdmin = (data) => PUT('AdminController',data);
const PutUser = (data) => PUT('UserController',data);
const DeleteProduk = (id) => Delete('Produk/index_delete?id=',id)
const DeletePemesanan = (id) => Delete('PemesananController/index_delete?id=',id)
const DeleteUser = (id) => Delete('UserController/index_delete?id=',id)
const DeleteAdmin = (id) => Delete('AdminController/index_delete?id=',id)
const GetPesanId = (data) => GET_ID('ImageUpload?id=',data)
const GetUserId = (data) => GET_ID('UserController?id=',data)
const GetAdminId = (data) => GET_ID('AdminController?id=',data)
const GetSlideshow = () => GET('Slideshow')


const API = {
    GetProduk,
    GetPengaturan,
    PostLogin,
    PostUser,
    GetProdukId,
    PostPesan,
    GetPesan,
    PostImageP,
    PostProduk,
    PutProduk,
    GetAllPesan,
    DeleteProduk,
    DeleteAdmin,
    DeletePemesanan,
    GetPesanId,
    PutPesan,
    GetUser,
    DeleteUser,
    GetUserId,
    GetAdmin,
    PostAdmin,
    GetAdminId,
    PutAdmin,
    PutUser,
    GetSlideshow
}

export default API
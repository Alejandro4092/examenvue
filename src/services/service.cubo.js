import Global from '@/Global';
import axios from "axios";



export default class ServiceCubo {

    getMarca(){
        return new Promise(resolve => {
            let request="api/cubos/Marcas";
            let url= Global.urlApiCubos+request;
            axios.get(url).then(response=>resolve(response.data));
        }
        );
    }
    getCubos(){
    return new Promise(resolve => {
        let request="api/cubos";
        let url= Global.urlApiCubos+request;
        axios.get(url).then(response=>resolve(response.data));
    });
    }
    //utiliza axios para las llamadas a la api
     findCubosMarca(){ 
     return new Promise(resolve => {
     let request="api/cubos/Marcas";
    let url= Global.urlApiCubos+request;
    axios.get(url).then(response=>resolve(response.data));
    });
    }
      login(usuario) {
    return new Promise(resolve => {
         const request = 'api/Manage/Login';
      const url = Global.urlApiEmpleados +request;
      axios.post(url, usuario, { headers: { "Content-Type": "application/json" } })
        .then(response => resolve(response.data));
    });
  }
    perfil(token) {
         return new Promise(resolve => {
            const request = 'api/Manage/PerfilUsuario';
      const url = Global.urlApiEmpleados +request;
      axios.get(url, { headers: { "Authorization": "Bearer " + token } })
        .then(response => resolve(response.data));
    });
    }
   getCompras(token) {
       return new Promise(resolve => {
        let request = 'api/Compras';
      const url = Global.urlApiEmpleados +request;
      axios.get(url, { headers: { "Authorization": "Bearer " + token } })
        .then(response => resolve(response.data));
    });
    }
      
  
  

}
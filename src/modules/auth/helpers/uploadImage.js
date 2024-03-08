import cafeteriaApi from "@/api/apiCafeteria"

const uploadImage = async ( file ) => {
    
    if(!file){
        return
    }

    try {
        
        const uID = localStorage.getItem('uID')
        
        const formData = new FormData() //? Para mandar archivos

        
        const config = {
            headers: {
                'awt_token': localStorage.getItem('token')
            }
        };

        

        formData.append('archivo', file)

        const resp = await cafeteriaApi.put(`/api/uploads/usuarios/${uID}`, formData, config)        

        //console.log(resp);

        return true

        

    } catch (error) {
        console.error('Error al cargar imagen, revisar logs');
        //console.log(error);

        return null
    }
}

export default uploadImage;
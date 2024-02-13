// export const myMutations = (state) => {

// }

export const setUsuario = (state, user) => {
    
        state.usuario = {
          nombre: user.nombre,
          uID: user.uID,
          correo: user.correo,
          token: user.token
        };

        
        state.isLoading = user.isLoading
}

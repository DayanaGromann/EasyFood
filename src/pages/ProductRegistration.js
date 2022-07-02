import React,{useState} from 'react'
import '../css/ProductRegistration.css'
import { db } from '../firebaseConfig';
import { storage } from '../firebaseConfig';
import {
  addDoc,
  collection
} from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
function ProductRegistration() {

  const values = {
    nomeProduto: '',
    descricao: '',
    valor: '',
    tempoPreparo: '',
    foto:''
  }

  const [produto, configurarProduto] = useState(values)
  const [imgUrl, setImgUrl] = useState('')
  const [progress, setProgress] = useState(0)

  const getProduct = (e) => {
    const {name, value} = e.target;
    configurarProduto({...produto, [name]:value})
  }

  const handleImgUpload = (e)=>{
    e.preventDefault()
    const file = e.target[4]?.files[0]; //pegar somente o primeiro
    if(!file) return;
  
    const storageRef = ref(storage, `imagens/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgUrl(url)
        })

         registerProduct(e)
      }
    )

    
  }

  const registerProduct = async(e) => {
    e.preventDefault() //para que não regarregue a página, que é o padrão do submit

    //handleImgUpload(e)
    
    const produtos = collection(db,"produtos")
    try{
      await addDoc(produtos, {...produto}).then(()=>{
        alert("produto cadastrado com sucesso")
      })
    }
    catch(error){
      console.log(error)
      alert("Erro ao cadastrar produto, tente novamente")
    }
    
    configurarProduto({...values})
  }
  
  return (
    <form className= 'form' onSubmit={handleImgUpload}>

      <label>
        Nome do produto
        <input type="text" className='input' name="nomeProduto" placeholder='nome do produto' value={produto.nomeProduto} onChange={getProduct} />
      </label>

      <label>
        Descrição
        <textarea name="descricao" className='input' cols="30" rows="10" placeholder='Descreva o produto'onChange={getProduct} value={produto.descricao}/>
      </label>

      <label>
        valor
        <input type="number" className='input' name="valor" onChange={getProduct} value={produto.valor}/>
      </label>

      <label>
        tempo de preparo (em minutos)
        <input type="number" className='input' name="tempoPreparo" onChange={getProduct} value={produto.tempoPreparo}/>
      </label>

      <label>
        Escolher foto do produto
        <input type='file' className='input' name="foto" onChange={getProduct} value={produto.foto}/> 
      </label>
      
      {!imgUrl && <progress value={progress} max='100' />}
      <br/>
      <input type="submit" value="Registrar produto" />

    </form> 
  )
}

export default ProductRegistration
import {useEffect, useState} from 'react';
import LinkForm from '../LinkForm';
import {collection, addDoc, onSnapshot, query, deleteDoc, doc} from 'firebase/firestore'
import {db} from '../../firebase';

const Links = () => {
    const [links, setLinks] = useState([]);

    const addOrEditLink = async (LinkObject) => {
        try {
            const docRef = await addDoc(collection(db,'links'),LinkObject);
            console.log('New task created');
        } catch (error) {
            console.log(error);
        }
    }
    const onDeleLink = async(id) => {
        if(window.confirm('Are you sure want to delete this link?')){
            await deleteDoc(doc(db,'links',id));
        }
    }
    useEffect(()=>{
        const firestoreSnap  = async() => {
            const q = query(collection(db,'links'));
            const unSuscribe = onSnapshot(q,(querySnaphot)=> {
                const links = [];
                querySnaphot.forEach((doc) => {
                    links.push({...doc.data(), id: doc.id});
                })
                setLinks(links);
            })
        }

        firestoreSnap();
    },[]);
    return(
        <>  
            <div className="col-md-4 p-2">
                <LinkForm addOrEdit={addOrEditLink}/>    
            </div>
            <div className="col-md-8 p-2">
                {
                    links.map((link)=>(
                        <div className="card mb-1" key={link.id}>
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                    <h4>{link.name}</h4>
                                    <i 
                                        className="material-icons text-danger"
                                        onClick={() => onDeleLink(link.id)}
                                    >close</i>
                                </div>
                                <p>{link.description}</p>
                                <a href={link.url} target="_blank" rel='noopener noreferrer'>
                                    Go to website
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Links;

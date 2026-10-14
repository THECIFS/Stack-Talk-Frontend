export default function CategoriaView(props) {
    return (
        <div style={{
        }}>
            <div
                style={{
                    inset: 0, top: 0, left: 0, position: 'fixed', zIndex: 999999, width: '100%', height: '100vh',
                    backgroundColor: 'black', opacity: 0.5
                }}
            >
            </div>
            <div
                style={{
                    inset: 0, top: 0, left: 0, position: 'fixed', zIndex: 999999, width: '100%', height: '100vh',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
            >
                <div style={{
                    display: 'flex', width: '550px', height: '450px', backgroundColor: '#122937'
                }}>
                    <div style={{
                        width: '200px', height: '450px'
                    }}>
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                            src={props?.src}
                        />
                    </div>
                    <div style={{width:'350px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                        <h1
                            style={{
                                fontSize:'20px', color:'white', textAlign:'center', width:'100%'
                            }}
                        >{props?.titulo}</h1>
                        <div style={{
                            display:'flex', flexDirection:'column', gap:'10px', justifyContent:'center', alignItems:'center'
                        }}>
                            {
                                props?.contenido?.map(c => (
                                    <div style={{
                                        backgroundColor:'#05513D', width:'300px', height:'30px'
                                    }}>
                                        <h2
                                            style={{
                                                margin:'0', fontSize:'16px', color:'white', width:'100%'
, textAlign:'center'                                            }}
                                        >
                                            {c}
                                        </h2>
                                    </div>
                                ))
                            }
                        </div>
                        <div style={{
                            display:'flex', justifyContent:'end', marginRight:'25px'
                        }}>
                            <button
                                style={{
                                    width:'100px', height:'30px', backgroundColor:'#68D9B3',
                                    fontSize:'18px'
                                }}
                                onClick={() => { props?.accion() }}
                            ><strong>CERRAR</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
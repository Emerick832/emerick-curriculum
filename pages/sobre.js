export default function Sobre() {
    return(
        <>
        <div className="container">
            <div className="quem__somos">  
                <img className="quem__somos-imagem" src="/example-people.jpg" alt="Guilherme Foto"></img>              
                <h2 className="nome">Guilherme Emerick</h2>
                <p className="descricao">Graduado em Analise e Desenvolvimento de Sistemas com experiencia de 1 ano pela fabrica de software e 1 ano de estagio no Conselho Nacional de Justica.
                </p>
            </div>
        </div>

        <div className="container">
            <div className="quem__somos">
                <img className="quem__somos-imagem" src="/example-people.jpg" alt="Charles Foto"></img>              
                <h2 className="nome">Charles Robson</h2>
                <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo ligula sed lacus suscipit molestie.
                </p>
            </div>
        </div>

        <style jsx>
            {`
            .container{
                display: flex;
                justify-content: center;
            }
            
            .quem__somos{
                display: flex;
                flex-direction:column;
                padding: 1.5rem;
                width: 400px;
                margin: 1rem;
                text-align: center;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            
            .quem__somos-imagem{
                justify-content: center;
                margin-left: 35%;
                width: 120px;
                height: 120px;
                border-radius: 50%;            
                align-items: center;    
            }

            
            `
        }            
        </style>

        </>
    )
}
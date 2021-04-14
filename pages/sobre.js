import Link from "next/link";
<head>
  <!-- Hotjar Tracking Code for https://emerick-curriculum.vercel.app/ -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2350342,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
</head>

export default function Sobre() {
  return (
    <>
      <div className="container">
        <div className="quem__somos">
          <img
            className="quem__somos-imagem"
            src="/example-people.jpg"
            alt="Guilherme Foto"
          ></img>
          <h2 className="nome">Guilherme Emerick</h2>
          <p className="descricao">
            Graduado em Analise e Desenvolvimento de Sistemas, com experiencia de
            1 ano pela fabrica de software da faculdade e 1 ano de estágio no Conselho
            Nacional de Justica. Atualmente estou estudando Design de Front-end e UX.
            Venho utilizando HTML, CSS, JavaScript e Angular para desenvolver este site pessoal.
          </p>
        </div>
      </div>

      <div className="container">
        <Link href="/">
          <input className="voltar" type="button" value="Voltar"></input>
        </Link>
      </div>

      <style jsx>
        {`
          .body {
            height: auto;
          }

          .container {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
          }

          .quem__somos {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
            width: 400px;
            margin: 1rem;
            text-align: center;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .quem__somos-imagem {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            justify-content: center;
            width: 120px;
            height: 120px;
            border-radius: 50%;
          }

          .voltar {
            margin: 1rem;
            background: #2ea44f;
            border: none;
            cursor: pointer;
            font-size: 18px;
            justify-content: center;
            text-decoration: none;
            text-align: center;
            text-transform: uppercase;
            width: 7rem;
            height: 3rem;
          }

        `}
      </style>
    </>
  );
}

import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap

// Importe as imagens aqui
import Imagem2015 from '../assets/2015.PNG';
import Imagem2016 from '../assets/2016.JPG';
import Imagem2017 from '../assets/2017.JPG';
import Imagem2018 from '../assets/2018.2.JPG';
import Imagem2019 from '../assets/2019.PNG';
import Imagem2020 from '../assets/2020.JPG';
import Imagem2021 from '../assets/2021.JPG';
import Imagem2022 from '../assets/fred.PNG';
import ImagemBolsonaro2022 from '../assets/LcomBolsonaro.PNG'; // Nova imagem
import ImagemZema2022 from '../assets/zema.PNG'; // Nova imagem
import ImagemCampanha2022 from '../assets/camp.PNG'; // Nova imagem
import ImagemCarteirinha2023 from '../assets/carteirinha.PNG'; // Nova imagem
import ImagemGestao2023 from '../assets/ge.JPG'; // Nova imagem
import ImagemRodeio2023 from '../assets/rodeio.PNG'; // Nova imagem
import ImagemDemocracia2024 from '../assets/democra.PNG'; // Nova imagem

const SobreLuisFelipe = () => {
  const trajetoria = [
    {
      ano: '2015',
      texto: 'Como jovem líder, coordenei o movimento pelo impeachment de Dilma Rousseff (PT) em São João del-Rei, representando a força e o vigor da juventude em busca de mudanças no cenário político.',
      imagem: Imagem2015,
    },
    {
      ano: '2016',
      texto: 'Participei do Programa Parlamento Jovem na Câmara de Vereadores de São João del-Rei, onde tive a oportunidade de me aprofundar no funcionamento do legislativo e representar a voz dos jovens.',
      imagem: Imagem2016,
    },
    {
      ano: '2017',
      texto: 'Fui ativo em manifestações que pediam justiça e o cumprimento da lei, participando ativamente de ações que resultaram na prisão de Lula. Nesse mesmo ano, coordenei eventos no Clube Libertas, dentro da Universidade Federal de Lavras, disseminando valores conservadores e liberais, fundamentais para o desenvolvimento de uma sociedade justa e equilibrada.',
      imagem: Imagem2017,
    },
    {
      ano: '2018',
      texto: 'Assumi a coordenação da campanha presidencial de Jair Bolsonaro em São João del-Rei, mobilizando a cidade em apoio ao candidato que representava a renovação política e o combate à corrupção.',
      imagem: Imagem2018,
    },
    {
      ano: '2019',
      texto: 'Como um dos fundadores do Movimento Conservador Mineiro, lutei contra a radicalização da esquerda nas universidades, expondo os desastres causados por suas políticas e promovendo uma agenda baseada em valores conservadores.',
      imagem: Imagem2019,
    },
    {
      ano: '2020',
      texto: 'Durante a pandemia, fui a voz ativa em defesa do comércio local e da economia de São João del-Rei, sendo o único político a lutar pelo funcionamento das atividades econômicas em um momento crítico.',
      imagem: Imagem2020,
    },
    {
      ano: '2021',
      texto: 'Com a ameaça do Passaporte Sanitário em São João del-Rei, fui à mídia e alertei a população sobre os riscos, liderando a oposição que conseguiu derrubar o projeto do PT, protegendo assim as liberdades individuais dos cidadãos.',
      imagem: Imagem2021,
    },
    {
      ano: '2022',
      texto: 'Comecei a trabalhar como Assessor Parlamentar do Deputado Dr. Frederico na Câmara dos Deputados. Neste ano, tive a honra de conhecer pessoalmente o Presidente Jair Bolsonaro e, junto com Dr. Frederico e o Governador Zema, trouxe milhões em recursos para São João del-Rei, incluindo armamentos e viaturas para nossas forças policiais.',
      imagem: Imagem2022,
    },
    {
      ano: '2022',
      texto: 'Conheci pessoalmente o Presidente Jair Bolsonaro.',
      imagem: ImagemBolsonaro2022,
    },
    {
      ano: '2022',
      texto: 'Junto de Dr. Frederico e Zema trouxemos milhões de reais em recursos para São João del-Rei.',
      imagem: ImagemZema2022,
    },
    {
      ano: '2022',
      texto: 'Fizemos a maior campanha Presidencial na história de SJDR para Jair Bolsonaro.',
      imagem: ImagemCampanha2022,
    },
    {
      ano: '2023',
      texto: 'Tirei a minha carteirinha da OAB e passei a exercer com muita honra e dedicação a advocacia, ajudando vários cidadãos a terem seus direitos respeitados.',
      imagem: ImagemCarteirinha2023,
    },
    {
      ano: '2023',
      texto: 'Formei em Gestão Pública - 2023.',
      imagem: ImagemGestao2023,
    },
    {
      ano: '2023',
      texto: 'Criei o movimento em prol do retorno dos rodeios de forma segura em SJDR.',
      imagem: ImagemRodeio2023,
    },
    {
      ano: '2024',
      texto: 'Fomos pessoalmente na Avenida Paulista em ato pela defesa da Democracia contra os avanços inconstitucionais do STF.',
      imagem: ImagemDemocracia2024,
    },
  ];

  return (
    <section 
      id="quem-sou" 
      className="py-20 text-center"
      style={{ backgroundColor: '#00371a' }} // Background da paleta de cores
    >
      <Container>
        <Typography 
          variant="h2" 
          className="mb-10 font-bold text-3xl md:text-5xl"
          style={{ color: '#e5c401' }} // Cor das palavras para contraste
        >
          Conheça minha trajetória
        </Typography>
        <Typography 
          variant="body1" 
          className="mb-12 mx-auto max-w-3xl"
          style={{ color: '#e5c401' }} // Cor das palavras para contraste
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Typography>
        <Grid 
          container 
          spacing={4} 
          justifyContent="center" // Centraliza os itens no eixo horizontal
        >
          {trajetoria.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                className="shadow p-3 mb-5 rounded transition-shadow duration-300"
                style={{ 
                  backgroundColor: '#e5c401', // Cor dos modais
                  border: '1px solid #e0e0e0',
                  transition: 'background-color 0.3s ease' // Transição suave
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imagem}
                  alt={`Imagem de ${item.ano}`}
                  className="object-cover"
                />
                <CardContent className="p-6">
                  <Typography 
                    variant="h5" 
                    component="div" 
                    className="font-semibold text-xl mb-2"
                    style={{ color: '#00371a' }} // Contraste dentro dos modais
                  >
                    {item.ano}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    style={{ color: '#00371a' }} // Contraste dentro dos modais
                  >
                    {item.texto}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SobreLuisFelipe;

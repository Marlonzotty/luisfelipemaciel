import React from 'react';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

// Importe as imagens aqui
import Imagem2015 from '../assets/2015.PNG';
import Imagem2016 from '../assets/2016.JPG';
import Imagem2017 from '../assets/2017.JPG';
import Imagem2018 from '../assets/2018.2.JPG';
import Imagem2019 from '../assets/2019.PNG';
import Imagem2020 from '../assets/2020.JPG';
import Imagem2021 from '../assets/2021.JPG';
import Imagem2022 from '../assets/2022.2.PNG';

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
  ];

  return (
    <section id="quem-sou" className="py-20 bg-gray-100 text-center">
      <Container>
        <Typography variant="h2" gutterBottom className="text-darkGreen">
          Quem Sou
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Typography>
        <Grid container spacing={4}>
          {trajetoria.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imagem}
                  alt={`Imagem de ${item.ano}`}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {item.ano}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
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

import { useRouter } from 'next/router'
import signs from '../data/horoscope.json'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VictoryPie, VictoryLabel } from 'victory';
import { useEffect, useState } from 'react';


const Page = ({ title, range, content, image, compatabilitySign1, compatabilitySign2, compImage1, compImage2, videobackground }) => {
    const router = useRouter();
    const [graphicData, setGraphicData] = useState([{ y: 0 }, { y: 0 }, { y: 100 }]); // Data used to make the animate prop work

    useEffect(() => {
        const percent = 90;
        const remainingPercentage = 100 - percent;
        const wantedGraphicData = [{ y: 0 }, { y: percent }, { y: remainingPercentage }];
        setGraphicData(wantedGraphicData);
    }, []);

    return (
        <div>
            <Navbar />
            <Container className='sign-div'>
                <Row>
                    <Col md={8}>
                        <h1 className='sign-title'>{title}</h1>
                        <p className='sign-range'>{range}</p>
                        <p className='sign-content'>{content}</p>
                    </Col>
                    <Col sm={4}>
                        <div className="image-box">
                            <Image src={image} width={300} height={300} alt="image" className='signpage-image' />
                        </div>
                    </Col>
                </Row>
                <div className="chart-container">
                    <p>{compatabilitySign1}</p>
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="svg-container" style={{ width: "400px", height: "400px" }}>
                        <VictoryPie standalone={false} data={graphicData} width={250} height={250} colorScale={['#c949a7', '#870865']} innerRadius={68} labelRadius={100} animate={{ easing: 'exp' }} labels={() => null}  />
                        <VictoryLabel textAnchor="middle" style={{ fontSize: 40,  fill: "white" }} x={125} y={125} text="90%" />
                    </svg>
                    <p>{compatabilitySign2}</p>

                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="svg-container" style={{ width: "400px", height: "400px" }}>
                        <VictoryPie standalone={false} data={graphicData} width={250} height={250} colorScale={['#c949a7', '#870865']} innerRadius={68} labelRadius={100} animate={{ easing: 'exp' }} labels={() => null} />
                        <VictoryLabel textAnchor="middle" style={{ fontSize: 40,  fill: "white" }} x={125} y={125} text="90%" />
                    </svg>
                </div>
                <video className='videoTag' autoPlay loop muted>
          <source src={videobackground} type='video/mp4' />
      </video>
            </Container>
        </div>
    )
}


export async function getStaticPaths() {
    const categories = signs.features;
    const paths = categories.map(({ properties: { title } }) => ({ params: { slug: title } }));

    return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
    const categories = signs.features;
    const category = categories.find(
        ({ properties: { title } }) => title === params.slug
    );

    const { title, range, content, image, compatabilitySign1, compatabilitySign2, compImage1, compImage2, videobackground } = category.properties;

    return { props: { title, range, content, image, compatabilitySign2, compatabilitySign1, compImage1, compImage2, videobackground } }
}




export default Page
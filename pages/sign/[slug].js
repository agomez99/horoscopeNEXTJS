import { useRouter } from 'next/router'
import signs from '../data/horoscope.json'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {VictoryPie, VictoryLabel} from 'victory';
import { useEffect, useState } from 'react';





const Page = ({ title, range, content, image, compatabilitySign1, compatabilitySign2, compImage1, compImage2 }) => {
    const router = useRouter()
    const { id } = router.query
    const percent  = 90; // Calculating the percentage
    const remainingPercentage = 100 - percent; // Calculating the remaining percentage

    const graphicColor = ['#388087', '#6fb3b8', '#badfe7']; // Colors
    const wantedGraphicData = [{ y: 0 }, { y: percent }, { y: remainingPercentage }]; // Data that we want to display
    const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work
    


    const [graphicData, setGraphicData] = useState(defaultGraphicData);

    useEffect(() => {
      setGraphicData(wantedGraphicData); // Setting the data that we want to display
    }, []);

    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col md={8}>
                        <h1> {title}</h1>
                    </Col>

                    <Col sm={4}>
                        <div className="image-box">
                            <Image src={image} width={300} height={300} alt="image" className='bio-image' />
                        </div> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                 {range}
                <p> {content}</p>
                 <p>{compatabilitySign1}</p>
                 <text x={100} y={110} textAnchor="middle" >
                        {percent}%
                        </text>
                 <Image src={compImage1} width={100} height={100} alt="image" className='bio-image' />  
                 <p>{compatabilitySign2}</p>
                 <Image src={compImage2} width={100} height={100} alt="image" className='bio-image' />
                    </Col>
                </Row>
                <svg viewBox="0 0 900 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="svg-container" style={{ width: "50%", height: "50%" }}>
                <VictoryPie standalone={false} data={graphicData} width={250} height={250} colorScale={graphicColor}  innerRadius={68} labelRadius={100} animate={{ easing: 'exp' }} style={{ labels: { fontSize: 20, fill: "white" } }}/>
                 <VictoryLabel textAnchor="middle" style={{ fontSize: 20 }} x={125} y={125} text={percent + "%"} />
                </svg>
                <svg viewBox="0 0 900 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="svg-container" style={{ width: "50%", height: "50%" }}>               
                 <VictoryPie standalone={false} data={graphicData} width={250} height={250} colorScale={graphicColor}  innerRadius={68} labelRadius={100} animate={{ easing: 'exp' }} style={{ labels: { fontSize: 20, fill: "white" } }}/>
                 <VictoryLabel textAnchor="middle" style={{ fontSize: 20 }} x={125} y={125} text={percent + "%"} />
                </svg>
            </Container>

        </div>
    )
}
export async function getStaticPaths() {
    const categories = signs.features;
    const paths = categories.map(({ properties: { title, range, content,image, compatabilitySign1, compatabilitySign2, compImage1, compImage2 } }) => ({
        params: { slug: title, range, content, image, compatabilitySign1, compatabilitySign2,  compImage1, compImage2}
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const categories = signs.features;
    const category = categories.find(
        ({ properties: { title } }) => title === params.slug
    );

    return {
        props: {
            title: category.properties.title,
            range: category.properties.range,
            content: category.properties.content,
            image: category.properties.image ,
            compatabilitySign2: category.properties.compatabilitySign2,
            compatabilitySign1: category.properties.compatabilitySign1,
            compImage1: category.properties.compImage1,
            compImage2: category.properties.compImage2,

        }
    };
}





export default Page
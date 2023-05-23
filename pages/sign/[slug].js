import signs from '../data/horoscope.json'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VictoryPie, VictoryLabel } from 'victory';
import { useEffect, useState } from 'react';


const Page = ({ title, range, content, image, compatabilitySign1, compatabilitySign2, compatabilitySign3, comp1percent, comp2percent, comp3percent, videobackground, rangeFrom, rangeTo }) => {
    const current = new Date();
    
    function formatDate(date) {
        date.setDate(date.getDate() + 1);
        return date.toLocaleString('en-us', { month: 'short', day: 'numeric' });
      }
      
      var myFrom = new Date(rangeFrom);
      var outputFrom = formatDate(myFrom);
      console.log(outputFrom);
      
      var myTo = new Date(rangeTo);
      var outputTo = formatDate(myTo);
      console.log(outputTo);
      




    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    var currentDate = new Date().toJSON().slice(0,10);

    const [graphicData, setGraphicData] = useState([{ y: 0 }, { y: 0 }, { y: 100 }]); // Data used to make the animate prop work
    const [graphicData2, setGraphicData2] = useState([{ y: 0 }, { y: 0 }, { y: 100 }]); // Data used to make the animate prop work
    const [graphicData3, setGraphicData3] = useState([{ y: 0 }, { y: 0 }, { y: 100 }]); // Data used to make the animate prop work
    useEffect(() => {
        const remainingPercentage1 = 100 - comp1percent;
        const remainingPercentage2 = 100 - comp2percent;
        const remainingPercentage3 = 100 - comp3percent;

        const newGraphicData = [{ y: 0 }, { y: 100 }, { y: remainingPercentage1 }];
        const newGraphicData2 = [{ y: 0 }, { y: 100 }, { y: remainingPercentage2 }];
        const newGraphicData3 = [{ y: 0 }, { y: 100 }, { y: remainingPercentage3 }];

        setGraphicData(newGraphicData);
        setGraphicData2(newGraphicData2);
        setGraphicData3(newGraphicData3);
    }, [comp1percent, comp2percent, comp3percent]);

    return (
        <div>
            <Navbar />
            <Container className='sign-div'>
                <Row>
                    <Col md={6}>
                        <h1 className='sign-title'>{title}</h1>
                        <p>{date}</p>
                        <p className='sign-range'>{outputFrom + ' - '+ outputTo}</p>
                        <p className='sign-content'>{content}</p>
                    </Col>
                    <Col md={6} className='text-center'>
                        <div className="image-box">
                            <Image src={image} width={300} height={300} alt="image" className='signpage-image' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className=" ">
                                <p className='text-center'>Compatability Matches</p>
                        <div className="chart-container">
                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="svg-container" style={{ width: "400px", height: "220px" }}>
                                <VictoryPie standalone={false} data={graphicData} width={250} height={250} colorScale={['#c949a7', '#870865']} innerRadius={68} labelRadius={100} animate={{ easing: 'exp' }} labels={() => null} />
                                <VictoryLabel textAnchor="middle" style={{ fontSize: 40, fill: "white" }} x={125} y={145} text={comp1percent+"%"} />
                                <VictoryLabel textAnchor="middle" style={{ fontSize: 30, fill: "white" }} x={125} y={110} text={compatabilitySign1} />
                            </svg>


                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="svg-container" style={{ width: "400px", height: "220px" }}>
                                <VictoryPie standalone={false} data={graphicData2} width={250} height={250} colorScale={['#c949a7', '#870865']} innerRadius={68} labelRadius={100} animate={{ easing: 'exp' }} labels={() => null} />
                                <VictoryLabel textAnchor="middle" style={{ fontSize: 40, fill: "white" }} x={125} y={145} text={comp2percent +"%"} />
                                <VictoryLabel textAnchor="middle" style={{ fontSize: 30, fill: "white" }} x={125} y={110} text={compatabilitySign2} />
                            </svg>

                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="svg-container" style={{ width: "400px", height: "220px" }}>
                                <VictoryPie standalone={false} data={graphicData3} width={250} height={250} colorScale={['#c949a7', '#870865']} innerRadius={68} labelRadius={100} animate={{ easing: 'exp' }} labels={() => null} />
                                <VictoryLabel textAnchor="middle" style={{ fontSize: 40, fill: "white" }} x={125} y={145} text={comp3percent +"%"} />
                                <VictoryLabel textAnchor="middle" style={{ fontSize: 30, fill: "white" }} x={125} y={110} text={compatabilitySign3} />
                            </svg>
                        </div>

                    </Col>
                </Row>

                <video className='videoTag' autoPlay loop muted>
                    <source src={videobackground} type='video/mp4' />
                </video>
            </Container>
        </div>
    )
}


export async function getStaticPaths() {
    const { features: categories } = signs;
    const paths = categories.map(({ properties: { title } }) => ({ params: { slug: title } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { features: categories } = signs;
    const category = categories.find(({ properties: { title } }) => title === params.slug);
    const {
        properties: { title, range, content, image, compatabilitySign1, compatabilitySign2, compatabilitySign3, comp1percent, comp2percent, comp3percent, videobackground, rangeFrom, rangeTo }
    } = category;
    return {
        props: {
            title,
            range,
            content,
            image,
            compatabilitySign1,
            compatabilitySign2,
            compatabilitySign3,
            comp1percent,
            comp2percent,
            comp3percent,
            videobackground,
            rangeFrom,
            rangeTo
        }
    }
}



export default Page
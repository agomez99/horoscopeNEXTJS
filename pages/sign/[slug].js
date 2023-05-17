import { useRouter } from 'next/router'
import signs from '../data/horoscope2.json'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Page = ({ title, range, content, image }) => {
    const router = useRouter()
    const { id } = router.query

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
                 {content}
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export async function getStaticPaths() {
    const categories = signs.features;
    const paths = categories.map(({ properties: { title, range, content,image } }) => ({
        params: { slug: title, range, content, image}
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
            image: category.properties.image

        }
    };
}





export default Page
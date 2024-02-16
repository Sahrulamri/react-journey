import Card from "../components/Fragments/Card";

export default function ProductPage () {
    return (
        <section>
            <div className="container">
                <div className="flex flex-wrap justify-center">
                    <Card>
                        <Card.Header></Card.Header>
                        <Card.Body title="Programming Itu menantang" author="Ridwan Kurniawan">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt dolor error laborum porro, provident animi magnam soluta.
                        </Card.Body>
                        <Card.Footer>
                        Baca selengkapnya
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </section>
    )
}


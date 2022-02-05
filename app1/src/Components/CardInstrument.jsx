const CardInstrument = (props) => {
    const {title} = props;
    return (
        <div class="card">
            <img class="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap"/>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">{title}</a>
                </div>
        </div>
    )
}
export default CardInstrument;
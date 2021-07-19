import { Button } from "@material-ui/core";

const Topic = ({title, bgColor, gradient}) => {
    const styles = {
        height: '80px',
        width : '200px',
        marginBottom : '10px',
        marginRight : '10px',
        color:'white',
        fontWeight:'700',
        fontSize : '20px',
        background: `${bgColor}`,
        background: `${gradient}`
    }
    return (
        <div>
            <Button style={styles}>{title}</Button>
        </div>
    )
}

export default Topic;
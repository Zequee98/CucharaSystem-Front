import React, {Component} from 'react'
import AddIngredientsForFood from './AddIngredientsForFood'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    paper :{
        margin:'0 auto',
        Maxwidth:'900px',
        height:'550px',
    },
    div :{
        margin: '20px',
        maxWidth: '450px'
    },
    button:{
        marginTop: '100px',
        float: 'right',
        paddingRight: '20px',
    }
}

export default class AddFoodMenu extends Component {
    
    render(){
        return(
            <Paper 
                zDepth={5}
                style={styles.paper}
            >
                <Subheader style={{textAlign:'center'}}>Agregar al Menu</Subheader>
                <Divider />
                <div style={styles.div}>
                    <TextField
                        floatingLabelText="Nombre"
                        type="text"
                        fullWidth={true}
                    /><br />
                    <TextField
                        floatingLabelText="$ Precio"
                        type="number"
                        fullWidth={true}
                    />
                </div><br />
                <Divider />
                <Subheader style={{textAlign:'center'}}>Ingredientes</Subheader>
                <Divider />
                <AddIngredientsForFood />
                <Divider />
                <div style ={styles.button}>
                    <RaisedButton 
                        label="Agregar"
                        primary={true}
                    />
                </div>
            </Paper>
        )
    }
}


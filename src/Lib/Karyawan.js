import React from 'react';
import {Card,Button} from 'semantic-ui-react';

const Karyawan = (props) => {
	return(
		<Card.Group>
	    <Card>
	      <Card.Content>
	        <Card.Header>Data Karyawan</Card.Header>
	        <Card.Meta>{props.data.nama_karyawan}</Card.Meta>
	        <Card.Meta>{props.data.jabatan}</Card.Meta>
	        <Card.Meta>{props.data.jenis_kelamin}</Card.Meta>
	        <Card.Meta>{props.data.tanggal_lahir}</Card.Meta>
	      </Card.Content>
	      <Card.Content extra>
	        <div className='ui two buttons'>
	          <Button basic color='green' onClick={() => props.update(props.data)} >
	            Edit
	          </Button>
	          <Button basic color='red' onClick={() => props.delete(props.data.id)} >
	            Delete
	          </Button>
	        </div>
	      </Card.Content>
	    </Card>
	  </Card.Group>
	)
}
export default Karyawan;
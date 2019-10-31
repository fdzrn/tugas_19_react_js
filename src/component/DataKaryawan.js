import React, {
	Component,
	Fragment
} from 'react';
import Karyawan from "../Lib/Karyawan";
import axios from 'axios';
import {
	Form,
	Divider
} from 'semantic-ui-react';

class DataKaryawan extends Component {
	state = {
		worker: [],
		form: {
			id: 0,
			nama_karyawan: '',
			jabatan: '',
			jenis_kelamin: '',
			tanggal_lahir: ''
		},
		isUpdate: false
	}

	getApi = () => {
		axios.get('http://localhost:3004/karyawan?_sort=id&_order=desc').then(result => {
			this.setState({
				worker: result.data
			})
		})
	}

	putDataToApi = () => {
		axios.put(`http://localhost:3004/karyawan/${this.state.form.id}`, this.state.form).then(result => {
			console.log(result);
			this.getApi();
			this.setState({
				isUpdate: false,
				form: {
					id: 0,
					nama_karyawan: '',
					jabatan: '',
					jenis_kelamin: '',
					tanggal_lahir: ''
				}
			})
		})
	}

	postDataToApi() {
		axios.post(`http://localhost:3004/karyawan`, this.state.form).then(result => {
			console.log(result)
			this.getApi();
			this.setState({
				isUpdate: false,
				form: {
					id: 0,
					nama_karyawan: '',
					jabatan: '',
					jenis_kelamin: '',
					tanggal_lahir: ''
				}
			})
		})
	}

	handleRemove = (data) => {
		axios.delete(`http://localhost:3004/karyawan/${data}`).then(result => {
			console.log(result)
			this.getApi();
		})
	}
	handleUpdate = (data) => {
		console.log(data)
		this.setState({
			form: data,
			isUpdate: true
		})

	}

	handleFormChange = (e) => {
		let formNew = {
			...this.state.form
		};
		let idRandom = new Date().getTime();
		if (!this.state.isUpdate) {
			formNew['id'] = idRandom;
		}
		formNew[e.target.name] = e.target.value;
		this.setState({
			form: formNew
		})
	}

	handleSave = () => {
		if (this.state.isUpdate === true) {
			this.putDataToApi();
		} else {
			this.postDataToApi();
		}

	}

	componentDidMount() {
		this.getApi();
	}

	render() {
		return ( <
			Fragment >
			<
			Divider horizontal > Masukan Data < /Divider>  <
			Form >
			<
			Form.Group >
			<
			Form.Input placeholder = 'Nama'
			name = 'nama_karyawan'
			onChange = {
				this.handleFormChange
			}
			width = {
				6
			}
			value = {
				this.state.form.nama_karyawan
			}
			/> <
			Form.Input placeholder = 'Jabatan'
			name = 'jabatan'
			onChange = {
				this.handleFormChange
			}
			width = {
				6
			}
			value = {
				this.state.form.jabatan
			}
			/> <
			Form.Input placeholder = 'Jenis Kelamin'
			name = 'jenis_kelamin'
			onChange = {
				this.handleFormChange
			}
			width = {
				6
			}
			value = {
				this.state.form.jenis_kelamin
			}
			/> <
			Form.Input placeholder = 'Tanggal Lahir'
			name = 'tanggal_lahir'
			onChange = {
				this.handleFormChange
			}
			width = {
				6
			}
			value = {
				this.state.form.tanggal_lahir
			}
			/> <
			Form.Button content = 'Save'
			primary onClick = {
				this.handleSave
			}
			/> < /
			Form.Group > <
			/Form>  

			<
			Divider horizontal > Data yang telah tersimpan < /Divider> {
			this.state.worker.map(worker => {
				return <Karyawan key = {
					worker.id
				}
				data = {
					worker
				}
				delete = {
					this.handleRemove
				}
				update = {
					this.handleUpdate
				}
				/>
			})
		} < /Fragment>
	)
}
}


export default DataKaryawan;
import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Card, CardTitle, Label, Input, Button, Alert, Table } from 'reactstrap';

const Home = (props) => {
    const [search, setSearch] = useState('');
    const [records, setRecords] = useState([]);

    const onSubmit = () => {
        axios.get(`http://localhost:8000/api/users?name=${search}`)
            .then(response => {
                console.log(records);
                setRecords(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const renderTableHeader = () => {
        if (records.length === 0) {
            return null;
        }

        return (
            <tr>
                {_.keys(records[0]).map((attribute) => {
                    return (
                        <th key={attribute} style={{ whiteSpace: "nowrap", backgroundColor: "#fff" }}>
                            {`${attribute}`}
                        </th>
                    );
                })}
            </tr>
        );
    };

    const renderTableBody = () => {
        console.log(records);
        return (
            <tbody>
                {records.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }

    const renderTable = () => {
        if (records.length === 0) {
            return <Alert className="text-center">No records found</Alert>;
        }

        return (
            <Table responsive bordered style={{ backgroundColor: 'white' }}>
                {renderTableHeader()}
                {renderTableBody()}
            </Table>
        );
    }

    return (
        <div>
            <Card style={{ width: 1000, margin: 40 }}>
                <Label>Search</Label>
                <Input
                    onChange={e => setSearch(e.target.value)}
                    style={{ margin: 20, width: '96%' }}
                    value={search}
                    type='email'
                    placeholder='Whats the name?'
                />
                <Button
                    color='primary'
                    style={{ margin: 20 }}
                    onClick={onSubmit}
                >
                    Search
                </Button>

                <Card body>
                    <CardTitle>User search</CardTitle>
                    {renderTable()}
                </Card>
            </Card>
        </div >
    );
};

export default Home;

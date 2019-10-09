import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ columns, sortColumn, onSort, data }) => {
    return ( 
        <table className="table">
            <TableHeader 
                columns={columns} 
                sortColumn={sortColumn} 
                onSort={onSort}
            />
            <TableBody data={data} columns={columns} />
            {/* <tbody>
                {movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like onClick={() => onLike(movie)} liked={movie.liked} /></td>
                        <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                ))}
            </tbody> */}
        </table>
    );
}
 
export default Table;


const SingleBlogs = ({ params }) => {
    const [year, id ] = params.segtments || [];

    return (
        <div>
            SingleBlogs {year || new Date().getFullYear()} of {id}
        </div>
    );
};

export default SingleBlogs;
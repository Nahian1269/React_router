

const User = ({user}) => {

    const {id,name, email,phone} = user
    return (
        <div>
            <h1>{name}</h1>
            <p>{id}</p>
            <h3>{email}</h3>
        </div>
    );
};

export default User;
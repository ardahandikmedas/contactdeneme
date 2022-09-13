import './User.css';

const User = ({ user }) => {
	console.log(user);
	return (
		<div className='user_card'>
			<img src={user.picture.large} alt='' />
			<div className='user_card_details'>
				<h2>
					 {user.name.title}. {user.name.first} {user.name.last}
				</h2>
				<p>
					<strong>&#128231;:</strong> {user.email}
				</p>
				<p>
					<strong>Age:</strong> {user.dob.age}
				</p>
				<p>
					<strong>&#128681;:</strong> {user.location.country}
				</p>
                <p>
					<strong>&#128222;:</strong> {user.phone}
				</p>
			</div>
		</div>
	);
};

export default User;
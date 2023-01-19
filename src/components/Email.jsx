export const Email = ({ email }) => {
  if (!email) {
    return console.error('Email must be provided')
  } 

  return <p class='email'>{ email }</p>
}
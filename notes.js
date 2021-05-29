// NodeJs introduced import in 14.6
/*

*React helmet
Use React Helmet to have Custom page titles 

*Changes in .gitignore
/node_modules  => node_modules, node_modules/   (Because we will have node_modules in root having server dependancies and in frontend )
.env (add can contain api key and mongodb uri)

*Commands
npx create-react-app frontend
npm install react-bootstrap bootstrap (But we are not doing bootstrap instead we will use bootswatch free theme for 
                                        bootstrap customized bootstrap.min.css file to have different color or styles)

(For react router) 
npm install react-router-dom
npm install react-router-bootstrap

*For CDN
open cdnjs and search cdn and paste in index.html

Important JS: 
{text && text}  instead of  {text ? text : ''}

*defaultProps and propTypes

This override if we pass prop 
Rating.defaultProps = {
  color: '#f8e825',
};

This is an internal machanism for checking type of propes and generate error is not matched
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.number,
};

Important Notes:

1.
Replaced <a> tag with <Link>
<Link> tag use to='' instead of href=''
Same we did for Navbar.Brand and Nav.Link
Benefit:
When replaced App doesn't reload while routing

2.
(Get product id from url and find in array of products)
const product = products.find( p => p.id === match.params.id);

3.
(We can also use Button and then rap it in LinkContainer)
<Link className='btn btn-light my-3' to='/'>Go Back</Link>

4.
Fluid:
To stop image from coming out of container we have to pass in fluid inside <Image/>

5.
*Button Disable:
we can disable button as               
<Button className='btn-block' type='button' disable={product.countInStock === 0}>Add To Cart</Button>
*/

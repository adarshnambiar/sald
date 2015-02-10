

//The basic reference for the algorithm was referred from www.kevlindev.com website.
//The line and line intersection algorithm is utilized to implement ray rectangle, ray convex functions


 var myArray[];
 var distances[];

 function Point(x, y) {
  this.x = x;
  this.y = y;
}
/* Circle vs Circle
 * INPUT: two circles specified by position and radius:
 *  c1 = {x:, y:, r:}, c2 = {x:, y:, r:}
 * RETURN VALUE:
 *  false if c1 and c2 do not intersect
 *  true if c1 and c2 do intersect
 */
function circleCircle(c1,c2) {
	
	var dx=c2.x-c1.x;
	var dy=c2.y-c2.y;
	var distance= Math.sqrt(dx*dx + dy*dy);//distance between centers of two circles
	if((distance < (c1.r + c2.r))
	{
		return true;
	}
	return false;
}

/* Rectangle vs Rectangle
 * INPUT: rectangles specified by their minimum and maximum extents:
 *  r = {min:{x:, y:}, max:{x:, y:}}
 * RETURN VALUE:
 *  false if r1 and r2 do not intersect
 *  true if r1 and r2 do intersect
 */
function rectangleRectangle(r1, r2) {
	
	if((r1.min.x < r2.max.x) && (r1.max.x > r2.min.x) && (r1.min.y < r2.max.y) && (r1.max.y > r2.min.y))
	{
		return true;
	}
	return false;
}

/* Convex vs Convex
 * INPUT: convex polygons as lists of vertices in CCW order
 *  p = [{x:,y:}, ..., {x:, y:}]
 * RETURN VALUE:
 *  false if p1 and p2 do not intersect
 *  true if p1 and p2 do intersect
 */
function convexConvex(p1, p2) {
	for(var i=0;i<p1.length;++i)
	{
		var p11=p1[i];
		var p12=p1[(i+1)%length];
		var newray={x:p11,y:p12};
		rayConvex(newray,p2);
	}
	
	for(var i=0;i<myArray.length;++i)
	{
		if(myArray[i]>0)
			return true;
			break;
	}
	return false;
}

/* Rav vs Circle
 * INPUT: ray specified as a start and end point, circle as above.
 *  ray = {start:{x:, y:}, end:{x:, y:}}
 * RETURN VALUE:
 *  null if no intersection
 *  {t:} if intersection
 *    -- NOTE: 0.0 <= t <= 1.0 gives the position of the first intersection
 */
function rayCircle(r, c) {

	var a=((r.end.x-r.start.x)*(r.end.x-r.start.x)+((r.end.y-r.start.y)*(r.end.y-r.start.y));
	var b=2*((r.end.x-r.start.x)(r.start.x-c.x)+(r.end.y-r.start.y)(r.start.y-c.y));
	var cc=(r.start.x*r.start.x)+(r.start.y*r.start.y)+(c.x*c.x)+(c.y*c.y)-2(c.x*r.start.x+c.y*r.start.y)-c.r*c.r;

	var dmt=b*b-4*a*cc;//determinant
	var sqrtdmt=Math.sqrt(dmt);
	var r1=(-b+sqrtdmt)/(2*a);//calculating roots
	var r2=(-b-sqrtdmt)/(2*a);

	if(dmt < 0)
	{
		return null;
	}
else if(dmt == 0)
	{
		return (-b/(2*a));
	}

else
{

	 if ( (r1 < 0 || r1 > 1) && (r2 < 0 || r2 > 1) ) {
        if ( (r1 < 0 && r2 < 0) || (r1 > 1 && r2 > 1) ) {
              return null;
        } else 
        	return null;
        }
   else
   {
   	 	if ( r1>=0 && r1 <= 1)
   	 	return r1;
   	 	if ( r2>=0 && r2 <= 1)
   	 	return r2;
   }
    
  }

	return null;
}

/* Rav vs Rectangle
 * INPUT: ray as above, rectangle as above.
 * RETURN VALUE:
 *  null if no intersection
 *  {t:} if intersection
 *    -- NOTE: 0.0 <= t <= 1.0 gives the position of the first intersection
 */
function rayRectangle(r, b) {
	
	var leftb=(b.min.x,b.min.y);
	var rightb=(b.max.x,b.min.y);
	var leftt=(b.min.x,y:b.max.y);
	var rightt=(b.max.x,y:b.max.y);
	
	 LineLine(r.start,r.end,leftb,leftt);		//leftsideofrectangle
	 LineLine(r.start,r.end,rightb,rightt);		//rightside
	 LineLine(r.start,r.end,leftb,rightb);		// bottomside
	 LineLine(r.start,r.end,leftt,rightt);		//topside
	
	if(myArray.length==0)
	{
		return null;
	}
	else
	{
		for (var i=0;i<myArray.length;i++)
		{
			if(myArray[i]!=0)
			{
				var distance=Math.sqrt(Math.pow(r.start.x-(myArray[i].x),2)+Math.pow(r.start.y-(myArray[i].y),2));
				distances.push(distance);
			}
		}
	}
	var min_d=Math.min(distances[0],distances[1]);//ray intersects the rectangle max at two points
	var raylength=Math.sqrt(Math.pow(r.start.x-r.end.x,2)+Math.pow(r.start.y-r.end.y,2));					
	var t=min_d/raylength; //minimum distance divided by the total length of ray gives us t
	return t;
	
}

/* Rav vs Convex
 * INPUT: ray as above, convex polygon as above.
 * RETURN VALUE:
 *  null if no intersection
 *  {t:} if intersection
 *    -- NOTE: 0.0 <= t <= 1.0 gives the position of the first intersection
 */
function rayConvex(r, p) {
for(var i=0;i<p.length;++i)
	{
		var p1 = p[i];
        var p2 = p[(i+1) % p.length];
		LineLine(r.start,r.end,p1,p2);
	}
	
	if(myArray.length==0)
	{
		return null;
	}
	else
	{
		for (var i=0;i<myArray.length;i++)
		{
			if(myArray[i]!=0)
			{
				var distance=Math.sqrt(Math.pow(r.start.x-(myArray[i].x),2)+Math.pow(r.start.y-(myArray[i].y),2));
				distances.push(distance);
			}
		}
	}
	var min_d=Math.min(distances[0],distances[1]);//ray can intersect polygon only at 2 points, taking min of that
	var raylength=Math.sqrt(Math.pow(r.start.x-r.end.x,2)+Math.pow(r.start.y-r.end.y,2));					
	var t=min_d/raylength;//minimum distance divided by the total length of ray gives us t
	return t;
}

//Checking intersection between two lines
function LineLine(a1,a2,b1,b2)
{
	var result;
	var n1=(b2.x-b1.x)*(a1.y-b1.y)-(b2.y - b1.y) * (a1.x - b1.x);
	var n2=(a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
	var d=(b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
	
	if(d!=0)
	{
		var nd1=n1/d;
		var nd2=n2/d;
		
		if(nd1>=0&&nd1<=1&&nd2>=0&&nd2<=1)
		{
			 myArray.push(new Point(a1.x+nd1*(a2.x-a1.x),a1.y+nd1*(a2.y-a1.y)));
		}
			else
			{
				myArray.push(0);
			}
	}
		else
		{
			if(n1==0 ||n2==0)
			{

			}
				else
				{
					return null;
				}
		}
		
}


module.exports = {
	circleCircle: circleCircle,
	rectangleRectangle: rectangleRectangle,
	convexConvex: convexConvex,
	rayCircle: rayCircle,
	rayRectangle: rayRectangle,
	rayConvex: rayConvex
};
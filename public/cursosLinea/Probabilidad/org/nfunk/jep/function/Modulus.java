package org.nfunk.jep.function;

import java.lang.Math;
import java.util.*;
import org.nfunk.jep.*;

public class Modulus extends PostfixMathCommand implements PostfixMathCommandI
{
	public Modulus()
	{
		numberOfParameters = 2;
	}
	
	public void run(Stack inStack)
		throws ParseException 
	{
		checkStack(inStack);// check the stack
		Object param2 = inStack.pop();
		Object param1 = inStack.pop();
		
		if ((param1 instanceof Double) && (param2 instanceof Double))
		{
			double divisor = ((Double)param2).doubleValue();
			double dividend = ((Double)param1).doubleValue();
		
			double result = dividend % divisor;
	
			inStack.push(new Double(result));
		}
		else
		{
			System.out.println("test");
			throw new ParseException("Invalid parameter type");
		}
		return;
	}
}
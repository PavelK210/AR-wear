program banan;
var i, x, n, t :integer;

begin
n := 7;

	for i := 0 to n do 
	begin
		if i  mod 2 <> 0 then 
		begin
		n := n - 1;
	
		for t:= 0 to n do 
			write(' ');
		for t := 1 to i do
		write('*');
		writeln();
		end;
		end;
		end.
		
		

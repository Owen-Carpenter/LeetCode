function romanToInt(s: string): number {
    //Init map
    const romans = new Map<string, number>();
    romans.set("I", 1);
    romans.set("V", 5);
    romans.set("X", 10);
    romans.set("L", 50);
    romans.set("C", 100);
    romans.set("D", 500);
    romans.set("M", 1000);

    //Iter string
    let ans: number = 0
    for(let i = 0; i < s.length; i++){
        let curr: number = romans.get(s[i]);
        if(curr < romans.get(s[i+1])){
            ans -= curr;
        } else {
            ans += curr;
        } 
    }
    return ans;
};
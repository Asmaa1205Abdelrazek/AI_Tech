#include<iostream>
using namespace std;
#include <string>


class Time{
    
   int min,sec;
   public:
   Time():min(0),sec(0){}
   Time(int min,int sec)
   {
       this->min=min;
       this->sec=sec;

   }
     
   void settime(){
    cin>>min;
    cin>>sec;
   }
     
   void gettime(){
    cout<<min<<endl<<sec;
   }
   bool  operator<(Time t2) const{
    
    
    return (min<t2.min && sec<t2.sec) ? true : false;
 }

};
 

int main(){
    

Time t1(12,13);
Time t2(15,2);
 cout<<(t2<t1);
































    return 0;
}
import java.util.*;
class Person{
    String name;
    int age;
    Person(String name,int age){
        this.name=name;
        this.age=age;
    }
    public String toString(){
        return " Name: "+name+" Age: "+age;
    }
}
    public class SortByAgeThenName{
        public static void main(String[] args) {
            List<Person>l=new ArrayList<Person>();
            l.add(new Person("Amulya", 19));
            l.add(new Person("Alice", 10));
            l.add(new Person("zzz", 15));
            l.add(new Person("Bob", 12));
            l.sort(Comparator.comparingInt((Person p)->p.age).thenComparing(p->p.name));
            System.out.println(l);
        }
    }

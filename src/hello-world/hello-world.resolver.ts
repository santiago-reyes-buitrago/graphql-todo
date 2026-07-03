import {Args, Float, Int, Query, Resolver} from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

  @Query(() => String, {
    name: 'hello',
    description: 'Hola mundo mensaje'
  })
  helloWorld(): string {
    return 'Hello World!';
  }
  @Query(() => Float,{
  })
  randomNumber(): number {
    return Math.random() * 100;
  }
  @Query(() => Int,{
    name: 'randomNumberInt',
    description: 'Retorna un numero entero desde 0 hasta el argumento to se defina',
  })
  getRandomFromZeroTo(@Args('to', {
    type: () => Int,
    description: 'limitador del numero aleatorio',
    nullable: true
  }) to: number = 10): number {
    return +(Math.random() * to).toFixed(0);
  }
}

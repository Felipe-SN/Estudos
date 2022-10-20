import random


def jogar():
    print('*************************************')
    print('* Bem-vindo ao Jogo de Adivinhação! *')
    print('*************************************', end='\n\n')

    numero_secreto = random.randrange(1, 101)
    total_de_tentativas = 0
    pontos = 1000

    print('Qual nível de dificuldade?')
    print('(1) Fácil\n(2) Médio\n(3) Difícil')

    dificuldade = int(input('\nDefina a dificuldade: '))

    if (dificuldade == 1):
        total_de_tentativas = 20
    elif (dificuldade == 2):
        total_de_tentativas = 10
    elif (dificuldade == 3):
        total_de_tentativas = 5
    else:
        total_de_tentativas = 10
        print('Dificuldade invalida, utilizando dificuldade padrão: Médio.')

    for rodada in range(1, total_de_tentativas + 1):
        print('\nTentativa {} de {}'.format(
            rodada, total_de_tentativas), end='\n\n')

        chute = int(input('Digite um número entre 0 e 100: '))

        if (chute < 1 or chute > 100):
            print('Você deve digitar um número entre 0 e 100', end='\n\n')
            continue

        print('Você Digitou: {}'.format(chute), end='\n\n')

        acertou = chute == numero_secreto
        chute_foi_maior = chute > numero_secreto
        chute_foi_menor = chute < numero_secreto

        if (acertou):
            print('Você Acertou! Sua pontuação é : {}'.format(pontos), end='\n\n')
            break
        else:
            if (chute_foi_maior):
                print('Você Errou, o numero correto é menor!', end='\n\n')
            elif (chute_foi_menor):
                print('Você Errou, o numero correto é maior!', end='\n\n')
            pontos_perdidos = abs(numero_secreto - chute)
            pontos = pontos - pontos_perdidos

    print('Fim de Jogo!')


if (__name__ == '__main__'):
    jogar()

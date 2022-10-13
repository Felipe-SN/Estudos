import random

print('*********************************')
print('*********************************', end='\n\n')
print('Bem-vindo ao Jogo de Adivinhação!', end='\n\n')
print('*********************************')
print('*********************************', end='\n\n')

numero_secreto = random.randrange(1, 101)
total_de_tentativas = 3

print(numero_secreto, end='\n\n')

for rodada in range(1, total_de_tentativas + 1):
    print('Tentativas {} de {}'.format(rodada, total_de_tentativas), end='\n\n')

    chute_str = input('Digite um número entre 0 e 100: ')
    chute_int = int(chute_str)

    if (chute_int < 1 or chute_int > 100):
        print('Você deve digitar um número entre 0 e 100', end='\n\n')
        continue

    print('Você Digitou: {}'.format(chute_int), end='\n\n')

    acertou = chute_int == numero_secreto
    chute_foi_maior = chute_int > numero_secreto
    chute_foi_menor = chute_int < numero_secreto

    if (acertou):
        print('Você Acertou!', end='\n\n')
        break
    else:
        if (chute_foi_maior):
            print('Você Errou, o numero correto é menor!', end='\n\n')
        elif (chute_foi_menor):
            print('Você Errou, o numero correto é maior!', end='\n\n')

print('Fim de Jogo!')

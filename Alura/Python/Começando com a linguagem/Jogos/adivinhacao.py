from turtle import goto


print('*********************************')
print('Bem-vindo ao Jogo de Adivinhação!')
print('*********************************')

numero_secreto = 42
total_de_tentativas = 3

for rodada in range(1, total_de_tentativas + 1):
    print('Tentativas {} de {}'.format(rodada, total_de_tentativas))

    chute_str = input('Digite um número entre 0 e 100: ')
    chute_int = int(chute_str)

    if (chute_int < 1 or chute_int > 100):
        print('Você deve digitar um número entre 0 e 100')
        continue

    print('Você Digitou: {}'.format(chute_int))

    acertou = chute_int == numero_secreto
    chute_foi_maior = chute_int > numero_secreto
    chute_foi_menor = chute_int < numero_secreto

    if (acertou):
        print('Você Acertou!')
        break
    else:
        if (chute_foi_maior):
            print('Você Errou, o numero correto é menor!')
        elif (chute_foi_menor):
            print('Você Errou, o numero correto é maior!')

print('Fim de Jogo!')

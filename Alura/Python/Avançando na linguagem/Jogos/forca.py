def jogar():
    print('*************************************')
    print('**** Bem-vindo ao Jogo da Forca! ****')
    print('*************************************')

    palavra_secreta = 'monk'
    letras_acertadas = []
    enforcado = False
    acertou = False
    total_de_tentativas = 3
    rodada = 1

    for letras in palavra_secreta:
        letras_acertadas.append('_')

    print('\njogando...')
    print('\n', letras_acertadas)

    while (not enforcado and not acertou):
        chute = input('\nDigite seu chute: ').strip()
        achou_letra = False
        index = 0

        for letra in palavra_secreta:
            if (chute.upper() == letra.upper()):
                achou_letra = True
                letras_acertadas[index] = letra.upper()
            index = index + 1

        if (not achou_letra):
            rodada = rodada + 1

        print('\n', letras_acertadas)

        if ('_' not in letras_acertadas):
            print('\nvocê entrou a palavra secreta')
            acertou = True
        elif (rodada > total_de_tentativas):
            print('\nVocê perdeu')
            enforcado = True

    print('\nFim de Jogo!')


if (__name__ == '__main__'):
    jogar()

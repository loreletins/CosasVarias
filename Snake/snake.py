import pygame
import random
import time
import os

Blanco = (255, 255, 255)
Negro = (0, 0, 0)
Rojo = (255, 0, 0)

def load_image(name):
	path = os.path.join('', name)
	return pygame.image.load(path).convert()

pygame.init()
superficie = pygame.display.set_mode((800,500))
pygame.display.set_caption('Serpiente')

mover_x = 300
mover_y = 300
mover_x_cambio = 0
mover_y_cambio = 0

serp_tamano = 10
ancho = 800
altura = 500
cuadro = 15

font = pygame.font.SysFont('none', 25)

listaSerpiente = []
largoSerpiente = 1

azarManzanaX = round(random.randrange(0, 300 - 20)/20.0)*20.0
azarManzanaY = round(random.randrange(0, 300 - 20)/20.0)*20.0

reloj = pygame.time.Clock()

def intro_juego():
	intro = True
	while intro:
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				quit()
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_c:
					intro = False
				elif event.type == pygame.K_q:
					pygame.quit()
					quit()

		background = load_image('fondo.jpg')
		superficie.blit(background, [0, 0])
		message_to_screen("Bienvenid@s,para comenzar a jugar, presiona C", Negro, -100)
		pygame.display.update()
		reloj.tick(5)

def serpiente (serp_tamano, listaSerpiente):
	for i in listaSerpiente:
		pygame.draw.rect(superficie, Negro, [i[0], i[1], serp_tamano, serp_tamano])

def message_to_screen(msg, color,  y_displace=0):
	textSur, textRect = text_objetos(msg, color)
	textRect.center = (ancho/2), (altura/2) + y_displace
	superficie.blit(textSur, textRect)

def text_objetos(text, color):
	textSuperficie = font.render(text, True, color)
	return textSuperficie, textSuperficie.get_rect()

def puntos(score):
	text = font.render("Puntos: " + str(score), True, Negro)
	superficie.blit(text, [0, 0])


def pausa():
	pausado = True

	while pausado:

		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				quit()
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_q:
					pygame.quit()
					quit()
				elif event.key == pygame.K_c:
					pausado = False

		background = load_image('fondo.jpg')
		superficie.blit(background, [0, 0])
		message_to_screen("PAUSA, para continuar presiona C, para salir presiona Q", Negro)
		pygame.display.update()
		reloj.tick(5)

def gameLoop():
	gameExit = False

	mover_x = 300
	mover_y = 300

	mover_x_cambio = 0
	mover_y_cambio = 0

	listaSerpiente = []
	largoSerpiente = 1

	azarManzanaX = round(random.randrange(0, 300 - 20)/20.0)*20.0
	azarManzanaY = round(random.randrange(0, 300 - 20)/20.0)*20.0

	while not gameExit:

		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				gameExit = True
		if event.type == pygame.KEYDOWN:
			if event.key == pygame.K_LEFT:
				mover_x_cambio = - serp_tamano
				mover_y_cambio = 0
			elif event.key == pygame.K_RIGHT:
				mover_x_cambio = serp_tamano
				mover_y_cambio = 0
			elif event.key == pygame.K_UP:
				mover_y_cambio = - serp_tamano
				mover_x_cambio = 0
			elif event.key == pygame.K_DOWN:
				mover_y_cambio = serp_tamano
				mover_x_cambio = 0
			elif event.key == pygame.K_p:
				pausa()

		if mover_x >= ancho or mover_x < 0 or mover_y >= altura or mover_y <0:
			gameExit = True

		mover_y += mover_y_cambio
		mover_x += mover_x_cambio
		superficie.fill(Blanco)
		pygame.draw.rect(superficie, Rojo, [azarManzanaX, azarManzanaY, 10, 10])

		cabezaSerpiente = []

		cabezaSerpiente.append(mover_x)
		cabezaSerpiente.append(mover_y)
		listaSerpiente.append(cabezaSerpiente)
		if len(listaSerpiente)> largoSerpiente:
			del listaSerpiente[0]
		serpiente(serp_tamano, listaSerpiente)
		puntos(largoSerpiente-1)
		pygame.display.update()

		if mover_x == azarManzanaX and mover_y == azarManzanaY:
			azarManzanaX = round(random.randrange(0, 300 - 10)/10.0)*10.0
			azarManzanaY = round(random.randrange(0, 300 - 10)/10.0)*10.0
			largoSerpiente += 1

		reloj.tick(cuadro)


	superficie.fill(Negro)
	message_to_screen("Perdiste", Rojo)
	pygame.display.update()
	time.sleep(3)

	pygame.quit()
	quit()

intro_juego()
gameLoop()
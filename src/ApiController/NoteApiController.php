<?php

namespace App\ApiController;

use App\Entity\Note;
use App\Entity\Tag;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api')]
class NoteApiController extends AbstractController
{
    public function __construct(
        private readonly TagRepository          $tagRepository,
        private readonly EntityManagerInterface $em)
    {
    }

    #[Route('/notes/{id}/tags', name: 'app_tag_note_new', methods: ['POST'])]
    public function newTagNote(Note $note, Request $request): Response
    {
        $tagText = $request->getPayload()->get('tag');

        $tag = $this->tagRepository->findOneByText($tagText);

        if (!$tag) {
            $tag = new Tag();
            $tag->setText($tagText);
            $this->em->persist($tag);
            $this->em->flush();
        }

        $note->addTag($tag);
        $this->em->persist($note);
        $this->em->flush();

        return new Response('', Response::HTTP_CREATED);
    }

//    #[Route('/{id}', name: 'app_note_delete', methods: ['POST'])]
//    public function delete(Request $request, Note $note, EntityManagerInterface $entityManager): Response
//    {
//        if ($this->isCsrfTokenValid('delete'.$note->getId(), $request->getPayload()->get('_token'))) {
//            $entityManager->remove($note);
//            $entityManager->flush();
//        }
//
//        return $this->redirectToRoute('app_note_index', [], Response::HTTP_SEE_OTHER);
//    }
}

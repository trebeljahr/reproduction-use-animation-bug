/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimationsWithCleanup } from '@/hooks/useAnimationsWithCleanup'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Parasaurolophus_1: THREE.SkinnedMesh
    Parasaurolophus_2: THREE.SkinnedMesh
    Parasaurolophus_3: THREE.SkinnedMesh
    Parasaurolophus_4: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    LightYellow: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'Armature|Parasaurolophus_Attack'
  | 'Armature|Parasaurolophus_Death'
  | 'Armature|Parasaurolophus_Idle'
  | 'Armature|Parasaurolophus_Jump'
  | 'Armature|Parasaurolophus_Run'
  | 'Armature|Parasaurolophus_Walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/dinosaurs_pack/Parasaurolophus.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.root} />
          </group>
          <group name='Parasaurolophus' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Parasaurolophus_1'
              geometry={nodes.Parasaurolophus_1.geometry}
              material={materials.LightYellow}
              skeleton={nodes.Parasaurolophus_1.skeleton}
            />
            <skinnedMesh
              name='Parasaurolophus_2'
              geometry={nodes.Parasaurolophus_2.geometry}
              material={materials.Green}
              skeleton={nodes.Parasaurolophus_2.skeleton}
            />
            <skinnedMesh
              name='Parasaurolophus_3'
              geometry={nodes.Parasaurolophus_3.geometry}
              material={materials.LightGreen}
              skeleton={nodes.Parasaurolophus_3.skeleton}
            />
            <skinnedMesh
              name='Parasaurolophus_4'
              geometry={nodes.Parasaurolophus_4.geometry}
              material={materials.Red}
              skeleton={nodes.Parasaurolophus_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/dinosaurs_pack/Parasaurolophus.glb')
